import { formatCurrency } from "@/components/addOther/formatcurrency";
import { useAppDispatch, useAppSelector } from "@/stores";
import { fetchDashboardData } from "@/stores/dasboard/async";
import {
  Box,
  CircularProgress,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box p={6} color={"black"}>
      <Heading size="md" mb={4}>
        Dashboard
      </Heading>

      {/* Top Stats */}
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mb={6}>
        <GridItem p={4} bg="blue.50" borderRadius="md">
          <Stat>
            <StatLabel>Total Processing Status</StatLabel>
            <StatNumber>{formatCurrency(data?.processingRevenue)}</StatNumber>
          </Stat>
        </GridItem>

        <GridItem p={4} bg="green.50" borderRadius="md">
          <Stat>
            <StatLabel>Total Pending Status</StatLabel>
            <StatNumber>{formatCurrency(data?.pendingRevenue)}</StatNumber>
          </Stat>
        </GridItem>

        <GridItem p={4} bg="purple.50" borderRadius="md">
          <Stat>
            <StatLabel>Total Transaction</StatLabel>
            <StatNumber>{data.totalTransactions}</StatNumber>
          </Stat>
        </GridItem>

        <GridItem p={4} bg="yellow.50" borderRadius="md">
          <Stat>
            <StatLabel>Total All Status</StatLabel>
            <StatNumber>{formatCurrency(data?.totalRevenue)}</StatNumber>
          </Stat>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {/* Sales Chart */}
        <GridItem
          p={4}
          bg="w
        +ite"
          borderRadius="20px"
          boxShadow="md"
          border={"1px solid white"}
        >
          <Heading size="sm" mb={4} color={"white"}>
            Grafik Penjualan
          </Heading>
          {/* Placeholder for the sales chart */}
          <Box
            h="200px"
            bg="gray.100"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text>Chart Placeholder</Text>
          </Box>
        </GridItem>

        {/* Transaction Types */}
        <GridItem p={4} bg="white" borderRadius="md" boxShadow="md">
          <Heading size="sm" mb={4}>
            Tipe Transaksi
          </Heading>
          <VStack>
            {/* Placeholder for transaction type chart */}
            <CircularProgress
              value={70}
              color="blue.400"
              size="120px"
              thickness="10px"
            />
            <HStack spacing={4}>
              <Text color="blue.500">Cash</Text>
              <Text color="green.500">Extrana</Text>
              <Text color="purple.500">Prime</Text>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
