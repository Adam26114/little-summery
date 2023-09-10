import { logo } from "../assets";

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="w-full flex justify-between items-center mb-10 pt-3">
                <img
                    src={logo}
                    alt="sumz_logo"
                    className="w-28 object-contain"
                />

                <button
                    type="button"
                    className=" black_btn"
                    onClick={() => window.open("https://github.com/Adam26114")}
                >
                    Github
                </button>
            </nav>
            <h1 className="head_text">
                Sumerize Article with <br className=" max-md:hidden" />
                <span className=" orange_gradient">OpenAi GPT-4.1</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an open-source article
                summarizer that transforms length articles into clear and
                concise summaries
            </h2>
        </header>
    );
};

export default Hero;
