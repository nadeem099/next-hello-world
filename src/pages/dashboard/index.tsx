import React, { useEffect, useState } from "react";

interface DashboardType {
  likes: number;
  comments: number;
  followings: number;
  followers: number;
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardType>();

  useEffect(() => {
    fetch("http://localhost:3030/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDashboardData(data);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Likes: {dashboardData?.likes}</p>
      <p>comments: {dashboardData?.comments}</p>
      <p>followers: {dashboardData?.followers}</p>
      <p>followings: {dashboardData?.followings}</p>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
