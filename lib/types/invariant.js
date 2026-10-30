/**
 * Package-owned invariant companion for `@x6_ai/x6-plugin-chat-enhance`.
 * @module @x6_ai/x6-plugin-chat-enhance/invariant
 */
const PACKAGE_NAME = '@x6_ai/x6-plugin-chat-enhance';
/** Cordis companion plugin name. */
export const name = 'x6-chat-enhance-invariant';
/** Service required before the companion can reserve package ownership. */
export const inject = ['invariants'];
/** No runtime invariant — slot registration is transactional. */
const install = () => { };
/**
 * Register this package's invariant companion.
 * @param ctx - Cordis context carrying the invariant service.
 * @returns the installed registration's disposer after setup succeeds.
 */
export const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
/* jscpd:ignore-end */
//# sourceMappingURL=invariant.js.map