ALTER TABLE "users" ADD COLUMN "PassThrough" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_PassThrough_unique" UNIQUE("PassThrough");