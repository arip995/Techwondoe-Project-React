import console from 'console';
import React, { useEffect } from 'react';
import { fetchTeamData } from '../Services/api.service';
export const Team = () => {
  /**
   * Function to fetch and sanitize the Team data
   */
  const getTeamData = () => {
    fetchTeamData()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    getTeamData();
  }, []);

  return <div>Team</div>;
};
