import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";

export function Dashboard() {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  useEffect(() => {
    async function fetchOrders() {
      const data = await getUserOrders();
      setOrders(data);
    }
    fetchOrders();
  }, []);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>

      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
}
