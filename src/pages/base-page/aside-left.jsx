import ProfileBox from '@/components/profile-box'
import SupporterCard from '@/components/supporter-card'
import GitHubCalendar from 'react-github-calendar';

export default function AsideLeft() {
    const selectContributionsOfDays = (contributions) => {
        const count = 210;
        const sortedContributions = contributions.sort((a, b) => new Date(a.date) - new Date(b.date));
        const selectedContributions = sortedContributions.slice(-count);
        return selectedContributions;
    }
    
    return (
        <div className="aside-left-container">
            <div className="content-box">
                <div className="content-title">Profile</div>
                <ProfileBox />
                <div className="divide-line large-space" />
                <div className="content-title">Support Tier</div>
                <div className="supporter-card-box">
                    <SupporterCard />
                </div>
                <div className="content-title">Contributions</div>
                <div className="github-calendar">
                    <GitHubCalendar username="kmwyatt" colorScheme="dark" blockSize={7} blockMargin={2} fontSize={12} transformData={selectContributionsOfDays} />
                </div>
            </div>
        </div>
    )
}
