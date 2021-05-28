//  Spinner
import Spinner from 'react-loader-spinner';

export default function Loader() {
  return (
    <Spinner
      role="alert"          
      type="Circles"
      color="#00BFFF"
      width={40}
      height={40}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '5px',
      }}
    />
  );
}
