import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

const StatsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

export default function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkIns = confirmedStays.length;

  const occupation = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  ) / (numDays * cabinCount);

  return (
    <StatsContainer>
      <Stat
        title="Bookings"
        value={numBookings}
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        value={checkIns}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy rate"
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </StatsContainer>
  );
}
