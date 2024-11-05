import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = ["/", "/auth(.*)", "/portal(.*)", "/images(.*)"];
const ignoredRoutes = ["/chatbot"];

const isPublicRoute = createRouteMatcher(publicRoutes);
const isIgnoredRoute = createRouteMatcher(ignoredRoutes);

export default clerkMiddleware(async (auth, req) => {
  if (isIgnoredRoute(req)) return;

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
