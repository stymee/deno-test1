import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run --allow-write --allow-read read-write.ts",
      desc: "run my read-write.ts file",
    },
  },
};

export default config;
