import {Caja} from "./type/caja.type";

const URL = "https://api.jsonbin.io/v3";
const ID = "66d782fdacd3cb34a87e1572";
const token = "$2b$10$7Epf2dc12cN0BVWXuZaRMOZG/OZz0doUuEt0rjzgVaYDKaGfN9xLe";

export const api = {
  list: async () => {
    const cajaDatos = await await fetch(`${URL}/b/${ID}`, {
      headers: {
        "X-Master-Key": token,
        "X-Bin-Meta": "false",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return cajaDatos.caja;
  },
  set: async (newData: Caja) => {
    const caja = await api.list();
    const newCaja: Caja[] = [...caja, newData];

    return await fetch(`${URL}/b/${ID}`, {
      headers: {
        "X-Master-Key": token,
        "X-Bin-Meta": "false",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({caja: newCaja}),
    }).then((res) => res.json());
  },
  reset: async () => {
    return await fetch(`${URL}/b/${ID}`, {
      headers: {
        "X-Master-Key": token,
        "X-Bin-Meta": "false",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({caja: []}),
    }).then((res) => res.json());
  },
};
