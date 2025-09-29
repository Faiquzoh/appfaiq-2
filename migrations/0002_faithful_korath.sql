ALTER TABLE "users" RENAME COLUMN "PassThrough" TO "username";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "text" TO "password";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_text_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_PassThrough_unique";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");