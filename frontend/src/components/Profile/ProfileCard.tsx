import React from 'react';
import { formatUnits, formatPercentage, applyIndicatorPercent, applyIndicatorGrade } from '../../utils/utils'
import { CourseOverviewFragment } from '../../graphql/graphql';

type ProfileCardProps = {
  course: CourseOverviewFragment
};

const ProfileCard = ({
  course
}: ProfileCardProps) => {
  const {
    abbreviation,
    courseNumber,
    enrolledPercentage,
    title,
    units,
    letterAverage
  } = course;

  return (
    <div className="profile-card">
      <div className="profile-card-container">
        <div className="profile-card-info">
          <h6>{`${abbreviation} ${courseNumber}`}</h6>
          <p className="profile-card-info-desc">{title}</p>
          <div className="profile-card-info-stats">
            { enrolledPercentage === -1
              ? null
              : applyIndicatorPercent(formatPercentage(enrolledPercentage), enrolledPercentage)
            }

            <p>&nbsp;•&nbsp;{formatUnits(units)}</p>
          </div>
        </div>
        <div className="profile-card-sort profile-card-grade">
          {applyIndicatorGrade(letterAverage, letterAverage)}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;