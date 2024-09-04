"use client";
import React, {useState} from "react";

import {Button} from "../ui/button";
import {Input} from "../ui/input";

import {ListTable} from "./ListTable";

import {api} from "@/api";
import {Caja} from "@/type/caja.type";

function ListCaja({initiallist}: {initiallist: Caja[]}) {
  const [text, setText] = useState("");
  const [list, setList] = useState(initiallist);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleAdd = async () => {
    const newcaja = await api.set({id: crypto.randomUUID(), msg: text});

    // const newcaja = await api.reset();
    setList(newcaja.record.caja);
    setText("");
  };

  return (
    <section className="m-auto max-w-56">
      <div className="flex flex-col items-center gap-4">
        <Input type="text" value={text} onChange={handleChange} onKeyDown={handleKeyDown} />
        <Button type="button" onClick={handleAdd}>
          new
        </Button>
      </div>
      <ListTable list={list} />
    </section>
  );
}

export default ListCaja;
