import Beta from "@/assets/images/beta.png";

export default function BetaBlock() {
  return (
    <div className="beta-block">
      <div className="beta-picture">
        <img src={Beta} alt="Beta" />
      </div>
      <div className="beta-content">
        <h1>
          Hey there, fellow developer! Welcome to <br /> <span>Codate</span> Beta 👋
        </h1>
        <div className="message">
          <p>
            So, here's the deal: we haven't quite got around to making Codate
            fully responsive yet. But hey, you caught us! We're working on it,
            promise! In the meantime, feel free to dive in and simplify your date
            formatting on your trusty ol' <u>desktop</u> or <u>tablet</u>.
          </p>
        </div>
      </div>
    </div>
  );
}
