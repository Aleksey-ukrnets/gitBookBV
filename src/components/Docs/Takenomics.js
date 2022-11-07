import './style.scss';
import { useWindowWidth } from '@react-hook/window-size';
import tokenomics1 from '../../assets/Docs/distribution/tokenomics1.svg';
import tokenomics_1024 from '../../assets/Docs/distribution/tokenomics_1024.svg';
import tokenomics_834 from '../../assets/Docs/distribution/tokenomics_834.svg';
import tokenomics_mobile from '../../assets/Docs/distribution/tokenomics_mobile.svg';

export default function Takenomics() {
  const width = useWindowWidth();
  const setImg =
    width >= 1025
      ? tokenomics1
      : width >= 835
      ? tokenomics_1024
      : width >= 426
      ? tokenomics_834
      : tokenomics_mobile;
  return (
    <div className="distribution" id="Tokenomics">
      <div className="distributionWrapper">
        <div className="distributionTitle">
          <div className="distributionEffect" />
          <h1>
            TOKEN <br /> DISTRIBUTION
          </h1>
        </div>
        <img className="distributionImg" src={setImg} alt="tokenomics" />
      </div>
    </div>
  );
}
