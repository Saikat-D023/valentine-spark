import { useState } from "react";
import ProposalScreen from "@/components/ProposalScreen";
import CelebrationScreen from "@/components/CelebrationScreen";

const Index = () => {
  const [accepted, setAccepted] = useState(false);

  return accepted ? <CelebrationScreen /> : <ProposalScreen onYes={() => setAccepted(true)} />;
};

export default Index;
