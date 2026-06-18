<<<<<<< HEAD
export default function LandingPage() {
  return (
    <div style={{
      background: "#0a0f1c",
      color: "white",
      minHeight: "100vh",
      fontFamily: "system-ui"
    }}>

      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #1f2a44"
      }}>
        <h2 style={{ fontWeight: 700 }}>CashPay</h2>

        <div style={{ display: "flex", gap: 20 }}>
          <a href="/login">Login</a>
          <a href="/register">Get Started</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        padding: "100px 40px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: 54,
          fontWeight: 800,
          lineHeight: 1.1
        }}>
          Modern financial infrastructure for everyone
        </h1>

        <p style={{
          fontSize: 18,
          opacity: 0.7,
          marginTop: 20
        }}>
          CashPay lets users earn, manage, and withdraw funds with a fast,
          secure digital wallet system.
        </p>

        <div style={{ marginTop: 30 }}>
          <a href="/register" style={{
            padding: "14px 22px",
            background: "#2563eb",
            borderRadius: 10,
            marginRight: 10
          }}>
            Get Started
          </a>

          <a href="/login" style={{
            padding: "14px 22px",
            border: "1px solid #2a3b5f",
            borderRadius: 10
          }}>
            Sign In
          </a>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        padding: "0 40px 80px"
      }}>

        <div style={card}>
          <h3>Secure Wallet</h3>
          <p>Encrypted balances and secure authentication system.</p>
        </div>

        <div style={card}>
          <h3>Task Earnings</h3>
          <p>Users earn rewards through simple task completion system.</p>
        </div>

        <div style={card}>
          <h3>Instant Withdrawals</h3>
          <p>Request and manage withdrawals with admin approval system.</p>
        </div>

      </div>

      {/* TRUST SECTION */}
      <div style={{
        padding: "60px 40px",
        borderTop: "1px solid #1f2a44",
        textAlign: "center",
        opacity: 0.8
      }}>
        <h2>Built for scale</h2>
        <p>
          Designed with modern fintech architecture, role-based security,
          and production-ready APIs.
        </p>
      </div>

    </div>
  )
}

const card = {
  background: "#111c33",
  padding: 20,
  borderRadius: 14,
  border: "1px solid #1f2a44"
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
>>>>>>> 975a4f6af978e65d5efad06445a87effd0f4e150
}
