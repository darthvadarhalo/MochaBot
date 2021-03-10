import { utilityCmd } from "../types";
import { commandTypeHelpers as ct } from "../../../commandTypes";
import { archiveSearch, displaySearch, SearchType } from "../search";

// Separate from BanSearchCmd to avoid a circular reference from ./search.ts
export const banSearchSignature = {
  query: ct.string({ catchAll: true }),

  page: ct.number({ option: true, shortcut: "p" }),
  sort: ct.string({ option: true }),
  "case-sensitive": ct.switchOption({ shortcut: "cs" }),
  export: ct.switchOption({ shortcut: "e" }),
  ids: ct.switchOption(),
  regex: ct.switchOption({ shortcut: "re" }),
};

export const BanSearchCmd = utilityCmd({
  trigger: ["bansearch", "bs"],
  description: "Search banned users",
  usage: "!bansearch dragory",
  permission: "can_search",

  signature: banSearchSignature,

  run({ pluginData, message, args }) {
    if (args.export) {
      return archiveSearch(pluginData, args, SearchType.BanSearch, message);
    } else {
      return displaySearch(pluginData, args, SearchType.BanSearch, message);
    }
  },
});
