import {api} from "@/api";
import ListCaja from "@/components/otro/ListCaja";

export default async function HomePage() {
  const caja = await api.list();

  return (
    <section>
      <ListCaja initiallist={caja} />
    </section>
  );
}
