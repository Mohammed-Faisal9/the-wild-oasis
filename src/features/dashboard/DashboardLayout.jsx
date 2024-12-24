import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
    grid-template-rows: auto 34rem auto;
  }
`;

export default function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const {
    isLoading: isLoading2,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  console.log(bookings);

  return (
    <>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
        />
    <StyledDashboardLayout>
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
        </>
  );
}
