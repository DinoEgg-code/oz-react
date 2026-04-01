import Card from "../common/card";
import Styledbox from "../common/Styledbox";

const Greenting = () => {
  const name = "용안";
  return (
    <div>
      <h1>hello, {name}</h1>
    </div>
  );
};

  const Button = () => {
    return (
      <button>click</button>
    )
  };

  const Mainpage = () => {
    return (
      <>
      <Greenting />
      <Button />
      <Card />
      <Styledbox />
      </>
    );
  };

  export default Mainpage;