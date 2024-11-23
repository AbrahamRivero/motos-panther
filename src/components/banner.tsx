import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function OptimizedBanner() {
  const t = useTranslations("HomePage.Banner");

  return (
    <div className="bg-background">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          alt={t("imageAltText")}
          src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=5&blend-mode=multiply"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {t("subtitle")}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  {t("ctaButtom1")}
                </Button>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    className: "text-white hover:text-accent",
                  })}
                >
                  {t("ctaButtom2")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
