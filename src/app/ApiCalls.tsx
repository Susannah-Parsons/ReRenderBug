"use client";

import { useEffect } from "react";
import { getResults } from "./actions";
import { addResults } from "./store";

export function ApiCalls() {
  useEffect(
    () => {
      async function callUI(){
        const results = await getResults()
        addResults(results)
        console.log(results)
      }
      callUI()
    },
    [
      /**
        Only call once on load */
    ],
  );
  return (
    <></>
  );
}
