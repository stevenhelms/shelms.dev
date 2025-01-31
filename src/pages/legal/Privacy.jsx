import PolicyWrapper from 'components/PolicyWrapper';
import policy from './privacyPolicy.md?raw';


const PrivacyPolicy = () => {
  return <PolicyWrapper markdownText={policy} />;
};

export default PrivacyPolicy;
