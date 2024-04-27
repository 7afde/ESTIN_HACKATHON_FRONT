import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { posttrash } from "../../lib/fetchUtils";

const NfcForm = () => {
  const [nfc, setNfc] = useState("");
  const [verre, setVerre] = useState("");
  const [plastic, setPlastic] = useState("");
  const [organic, setOrganic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      topic: "myTopic",
      message: { nfc, verre, plastic, organic },
    };
    console.log(formData);
    const response = posttrash(formData);
    console.log(response);
  };

  return (
    <form>
      <div>
        <label htmlFor="nfc">NFC Serial Number</label>
        <Input
          type="number"
          name="nfc"
          id="nfc"
          value={nfc}
          onChange={(e) => setNfc(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <div>
          <label htmlFor="verre">Verre</label>
          <Input
            type="number"
            name="verre"
            id="verre"
            value={verre}
            onChange={(e) => setVerre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="plastic">Plastic</label>
          <Input
            type="number"
            name="plastic"
            id="plastic"
            value={plastic}
            onChange={(e) => setPlastic(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="organic">Organic</label>
          <Input
            type="number"
            name="organic"
            id="organic"
            value={organic}
            onChange={(e) => setOrganic(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit" variant={"default"} onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default NfcForm;
