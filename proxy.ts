import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. 锁死保护区域：定义哪些路由需要登录后才能访问
// '/studio(.*)' 会完美匹配 /studio 首页以及它下面的所有子路由（如 /studio/page 或 /studio/settings）
const isStudioRoute = createRouteMatcher(["/studio(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // 2. 规则判定：如果用户当前访问的是 studio 路由，立刻触发安全检查
  if (isStudioRoute(req)) {
    // 强制拦截：如果未登录，Clerk 会自动将用户重定向到登录页面
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for Clerk's auto-proxy path
    "/__clerk/(.*)",
    "/(api|trpc)(.*)",
  ],
};
