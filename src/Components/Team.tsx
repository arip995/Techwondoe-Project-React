import React, { useEffect, useState } from 'react';
import { fetchData } from '../Services/api.service';
import { TeamData } from '../Models/Team.type';
import { sanitizeTeamData } from '../Services/sanitizer.service';
import Typography from '../stories/Components/Typography/Typography';
import Button from '../stories/Components/Button/Button';

const Team = () => {
  const [teamData, setTeamData] = useState<TeamData>();

  /**
   * Function to fetch and sanitize the Team data
   */
  const getTeamData = () => {
    fetchData('team')
      .then((data) => {
        const sanitizedData: TeamData = sanitizeTeamData(
          data?.items[0]?.fields
        );
        setTeamData(sanitizedData);
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
    /**
     * Clean up code
     */
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);

  return (
    <div className="w-full bg-[#FAE1D5] flex justify-center relative">
      <div className="lg:w-2/3 md:flex items-center justify-center gap-12 w-full md:py-24 pb-12">
        <div className="lg:min-w-[450px] max-w-1/2 lg:min-h-[364px] lgb:flex lgb:justify-center">
          <img src={teamData?.image} />
        </div>
        <div className="text-left lg:w-1/2 w-full lgb:px-4">
          <div className="mt-3 font-poppins text-[#E6692E] text-[15px] font-semibold	leading-6">
            {teamData?.ourTeam}
          </div>
          <Typography className="mb-3" label={teamData?.title!} type="h1" />

          <Typography
            className="mt-3 mb-5"
            label={teamData?.description!}
            type="p2"
          />
          <Button label={teamData?.buttonText!} theme="primary" />
        </div>
      </div>
      <img
        style={{ height: '-webkit-fill-available' }}
        className="xlb:hidden absolute left-0 -top-24"
        src={teamData?.icon}
      />
    </div>
  );
};

export default React.memo(Team);
