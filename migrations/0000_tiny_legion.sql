CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"text" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"update_at" timestamp DEFAULT now(),
	CONSTRAINT "users_text_unique" UNIQUE("text"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
