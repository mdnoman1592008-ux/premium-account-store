const requests = new Map();

module.exports = (
  req,
  res,
  next
) => {

  const ip =
  req.ip;

  const now =
  Date.now();

  const windowTime =
  60 * 1000;

  const maxRequests = 100;

  if(!requests.has(ip)){
    requests.set(ip, []);
  }

  const userRequests =
  requests.get(ip);

  const validRequests =
  userRequests.filter(
    time =>
    now - time < windowTime
  );

  validRequests.push(now);

  requests.set(
    ip,
    validRequests
  );

  if(
    validRequests.length >
    maxRequests
  ){
    return res.status(429).json({
      success:false,
      message:
      "Too many requests"
    });
  }

  next();
};
