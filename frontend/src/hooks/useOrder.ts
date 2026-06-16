"use client";

import { useState } from "react";

export default function useOrder() {

  const [loading,setLoading] =
  useState(false);

  const [orders,setOrders] =
  useState([]);

  const fetchOrders =
  async (callback:any) => {

    try {

      setLoading(true);

      const data =
      await callback();

      setOrders(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return {
    loading,
    orders,
    fetchOrders
  };
}
