import { useEffect, useState } from "react"
import LandingPage from "./LandingPage";

const LoadingPage = () => {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }, []);
  return (
    <div>
       {loading ? (
           <div className="loadingContainer">
           <img src="/OnboardingGIF/loading.gif" alt="loading" /> 
         </div>
       ) : (<LandingPage/>)}
    </div>
  )
}

export default LoadingPage