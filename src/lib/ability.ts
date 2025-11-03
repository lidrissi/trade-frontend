import { User } from "@/types/user";
import { Ability, AbilityBuilder, AbilityClass } from "@casl/ability";

export type Actions = "manage" | "create" | "read" | "update" | "delete";
export type Subjects = "Post" | "User" | "Comment" | "all";

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

export function defineAbilityFor(user: User): AppAbility {
  const { can, build } = new AbilityBuilder(AppAbility);

  // Guest permissions
  if (!user) {
    can("read", "Post");
    can("read", "Comment");
    return build();
  }

  // Common authenticated user permissions
  can("read", "Post");
  can("read", "Comment");
  can("create", "Comment");
  // can("update", "Comment", { userId: user.id });

  // Role-based permissions
  switch (user.role) {
    case "admin":
      can("manage", "all");
      break;

    case "editor":
      can("manage", "Post");
      can("manage", "Comment");
      can("read", "User");
      break;

    case "author":
      can("create", "Post");
      // can("update", "Post", { userId: user.id });
      // can("delete", "Post", { userId: user.id });
      break;

    case "user":
      can("create", "Post");
      // can("update", "Post", { userId: user.id });
      // can("read", "User", { id: user.id });
      break;
  }

  // Custom permissions from user object
  if (user.permissions) {
    user.permissions.forEach((permission: string) => {
      const [action, subject] = permission.split(":");
      can(action as Actions, subject as Subjects);
    });
  }

  return build();
}
