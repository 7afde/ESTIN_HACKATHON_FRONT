import { Button } from "../ui/button";
import { useState } from "react";
import { posttrash } from "../../lib/fetchUtils";
import { SiNfc } from "react-icons/si";

const NfcForm = () => {
  const [nfc, setNfc] = useState("");
  const [verre, setVerre] = useState("");
  const [plastic, setPlastic] = useState("");
  const [organic, setOrganic] = useState("");

  const handleNfcChange = (event) => {
    setNfc(event.target.value);
  };

  const handleVerreChange = (event) => {
    setVerre(event.target.value);
  };

  const handlePlasticChange = (event) => {
    setPlastic(event.target.value);
  };

  const handleOrganicChange = (event) => {
    setOrganic(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      topic: "myTopic",
      message: { nfc, verre, plastic, organic },
    };
    console.log(formData);
    const response = await posttrash(formData);
    setNfc("");
    setVerre("");
    setPlastic("");
    setOrganic("");
    console.log(response);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-5 text-center py-8">SCAN AND THROW</h1>
      <div className="py-5">
        <SiNfc size={100} />
      </div>
      <form className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2">
          <input
            onChange={handleNfcChange}
            value={nfc}
            type="number"
            autoFocus
            placeholder="nfc"
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <input
            onChange={handleOrganicChange}
            type="number"
            value={organic}
            placeholder="organic"
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <input
            onChange={handlePlasticChange}
            type="number"
            value={plastic}
            placeholder="plastic"
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <input
            onChange={handleVerreChange}
            type="number"
            value={verre}
            placeholder="verre"
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
        </div>
        <Button type="submit" variant={"default"} onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NfcForm;
