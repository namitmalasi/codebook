import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";

export function Order() {
  const { state } = useLocation();
  useTitle("Order Summary");
  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
}
