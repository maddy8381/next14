import { authMiddleware } from "@clerk/nextjs";

//For all the redirection related to login signup or authentication

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
