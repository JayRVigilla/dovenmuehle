/*
 * AddString Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const POST_STRING = 'dovenmuehle/AddString/POST_STRING';
export const PREPENDED_STRING = 'dovenmuehle/AddString/PREPENDED_STRINGS';
export const POST_STRING_ERR = 'dovenmuehle/AddString/POST_STRINGS_ERR';
export const UPDATE_CLIENT_STRING = 'dovenmuehle/AddString/CLIENT_STRING';
