import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">GPTGenius</h1>
          <p className="mb-5">
            GPTGenius is a web app that uses OpenAI API to generate text.
          </p>

          <Link href={"/chat"} className="btn btn-outline btn-primary btn-lg">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
