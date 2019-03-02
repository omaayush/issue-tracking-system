import { DasboardTimeDuration } from './DashBoardTime';

export default interface DashboardDataManager {
    getDataForChartBasedOnTime(time: DasboardTimeDuration): void;
    getFourRecentHighPriorityIssue(): void;
    getFourRecentlyUpdatedIssue(): void;
    getAssigneesWithHigestNumberOfIssueAssigned(): void;
}
