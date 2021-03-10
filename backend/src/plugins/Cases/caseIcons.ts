import { CaseTypes } from "../../data/CaseTypes";

export const caseIcons: Record<CaseTypes, string> = {
  [CaseTypes.Ban]: "<:case_ban:818057128593719317>",
  [CaseTypes.Unban]: "<:case_unban:818057128824143913>",
  [CaseTypes.Note]: "<:case_note:818057128996110366>",
  [CaseTypes.Warn]: "<:case_warn:818057128732131379>",
  [CaseTypes.Kick]: "<:case_kick:818057128727281675>",
  [CaseTypes.Mute]: "<:case_mute:818057128643133451>",
  [CaseTypes.Unmute]: "<:case_unmute:818057129096511508>",
  [CaseTypes.Deleted]: "<:case_deleted:818057129025863690>",
  [CaseTypes.Softban]: "<:case_softban:818057129067282432>",
};
