import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL } } = getConfig();

export default function Data() {
  return (
    <div>
      We show data from API URL: <code>{API_URL}</code>
    </div>
  )
}

Data.getInitialProps = () => ({});
