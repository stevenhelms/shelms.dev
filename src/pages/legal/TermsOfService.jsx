import PolicyWrapper from 'components/PolicyWrapper';
import policy from './termsOfService.md?raw';

const TermsOfService = () => {
  return <PolicyWrapper markdownText={policy} />;
};

export default TermsOfService;
