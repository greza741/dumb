import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

export function Product() {
  return (
    <Box
      color={"#F74C4C"}
      paddingLeft={"50px"}
      bgColor={"brand.background"}
      h={"full"}
    >
      <Box padding={"30px 0px 20px 0px"}>Products</Box>
      <Grid
        templateColumns={"repeat(4, 1fr)"}
        gridGap={"20px"}
        columnGap={"20px"}
      >
        <GridItem w={"100%"}>
          <Box border={"1px solid #202021"} bg={"#202021"} borderRadius={"5px"}>
            <Image
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIEBgcIAQP/xABDEAACAQIDAwgGBQoHAQAAAAAAAQIDBAURIQYSMQciQVFhcYGxEzKRocHRFBUjJCUzQmJyc4Ky4fDxJlJTY5Kiwgj/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3iAAAAAAAAeZo9zyNc8pm3ksEg8MwmcXf1Fzqmj9Cvnr4adYGT7R7X4Js6vxK9jGrlmqMFvVH1aL4mCXfLDUqtrC8BrNPhK6qKHtSz9zZrKG/cXEri5nKrXm25VJvNtkjRggMrXKrtLWjGpRw7DoQlHNKUptlUOVnaGjUjG4wmxqqWf5OpKL6OtMxTDoJ2Fs+ulHyPLiC+lW67J+SA2PhnLBh1SpCnjGHXVlvPL0scqkI9+WvsTNg4Xillilsriwuadek/zoSzyfU+p9jOcLimtdOPEowbGb/Zq/V5hdWVP/AD0lrGa6mvh5cQOnwQWyG0lrtLhcbu2ajNZRq0s9YS+XUToAAAAAAAAAAAAAAAPGBD7WYxHBMFubxtb8YNU0+Dk+Hh09yOZLq/q4jiNa5rTcpTk22+L1fH+uLZtTlyxZqFKwhLSEd5rrlLPL3KXtNOYfLOTAn7XozJKlwI614IkafB9wEI8Yu7anQoWtrCpGFCm5Sm3xa7C6w7EKl/UpyuKSpVKc5xai816qaPlhrpxblPJ71Gnp3RRXZZfWMpRaalUk8urmpfAC+rriRN2tGS9bpIm99VgTXJttLPAdoIb839Hq82ss9MnxeXZln4drOkKclOCknmms0zj2lWlRvoTg8nGSa7zp3k8xNYjszbty3p0c6cu5er7YtPxAycAAAAAAAAAAAAAPHoj0orPdpTfUmBzlyr3ju8dvJqWcY1HGPcko+cZe0wjDHqTu2Vf09a4q55uVWevfKUv/AEY/hj1AyW0eiJGD0fcRlq9ESEHzX3AY5VVzSlSnCjVnTqW9NxlCDl0LPgXmCRrRqKpXpzp+kqzcFNZNpRRK4a/w+1/Yw8kLh/e7b9/yAqrPiRN6+ayTqviRN6+awISUsrtd5vjkUvXK3urST9WMJrt1lHyjE0FN/e0+03JyPV3Sx6NLPSrby07nB/MDdgAAAAAAAAAAAAAW+IT3LOtLPLKDfuLgsMelu4PeS6qUn7gOVsbm54ZRqPjNJv8A4pEThr1JLHHlhNqux+ZE4e9UBk9rLREhCXNfcRVrLREjTlzfACrDn+H237KHkhcS+9W37/kfPDn9wtv2UPJC4f3q2/e8gK60tGRN9Lmska0uJE30uawISpL7yu82vyW1NzanDP0qU17f7GpKr+8LvNo8m9Td2pwTX1lJeyMgOhwFwAAAAAAAAAAAACN2keWA376qE/JkkRm0yzwC/X+xPyYHKeOv8NtV+t5siLJ5SRJ4687G3XVvfxMibV5MDI7SWiJGnLTIh7SeiJKnID74Zk7O3jKSj9ms2+jJFNeWd3brpW+/DL+ZRGEotuhOMU3m4yjms+nLVDd3ZOcpb02sm2stOpIBWl2kTey5rJCtLiRF7PRgRVR/brvNm8nMv8UYB+tNf9JGsJ61UbL5N3vbU4D2Sl/BMDpJALgAAAAAAAAAAAAEfj8d7BryPXRl5EgW2Ix37GtF8HBoDkLG5Z21FdX9yKoPUk8di4RpRlxWj71p8CKpPUCYtZZZEpRloQtvLgSVGYF/GWh5OR8oz0PJzA+NefEiruXEvq8iMuXxAsZflMzZ3JYt/arB/wBHe/hl8zWD9bxNq8jlN1dp7F5erTm/ckB0WuAPFwPQAAAAAAAAAAAHzuFvUZrsZ9DySzTQHIm2lD6PidzS/wBO5qR8N5v4mO03qZ1ysWjtdrsSpbuSqSVSHbnFPzTMDjxAkaEuBIUZEXQfAv6TAvYz0PKkz501KekIyb7EU1M08mmn1NZAfGtLiR1d8S8rS4lhWfEC26fE3NyF2+/jrnl+Stc/Fy/kacprOpFPhnn4G/OQGzzt8QvZL1nCmvDP5gbiAAAAAAAAAAAAAAABoT/6Dwx0MRssThHScfRyfatV8TTlRKNTmrmvVdx1Vyr4B9fbK3NKEc61KPpKeXWk/wCvE5YnBpypS0qU3wfvQH1ovgXtGRH0nwL2iwJulcRpQoeiXNhFN6cW+L9nmfHEKrr04zn66e7mllplr7y1jN7qTeaKKs5T1fgBbVpFjVeeZd1mWkouUko8QKaayWfXzV8f67TqXkgwt4bsZab8cqlf7WXi817sjnXZLBp47tFZ2FFNw3k5vqinqzrqwto2lnSoQWUYRUUkBcAAAAAAAAAAAAAAAApqQjUhKElmmsmc48ruwtfCMTqYrh9Ju2qyzmo58x9fcdIFpiNhb4hbToXNNThJZNNAca04bz6Iy6epl5SpyjxTNvbV8k8qVadxhC5jefozB7jZnELNuFW2rQT6UmBBRhoUzj7SV+qbrhvVNOuEfkewwe6lJZelk0+Cil5IDH6tKT+fQWvoqlSSo0Iuc5vLRavsM8sNicVxKolC2nFN+tKLNo7E8mVphE4Xd7FVbjtXq9wFvyObDvArP6wvoL6ZWXT+auo2iUwjGEVGKyS4IqAAAAAAAAAAAAAAAAAAADxnwrWVtWX2tGEu9AAWksDw2T1tKfsKqeDYdB820prwAAvKVClSWVOnGPcj6gAAAAAAAAAAAB//2Q=="
            />
            <Box p={"10px"}>
              <Text>Mouse</Text>
              <Text color={"white"} fontSize={"11px"}>
                Rp.100.000
              </Text>
              <Text color={"white"} fontSize={"11px"}>
                Stock : 100
              </Text>
            </Box>
          </Box>
          {/* </Box> */}
        </GridItem>
        <GridItem w={"100%"}>
          <Box border={"1px solid #202021"} bg={"#202021"} borderRadius={"5px"}>
            <Image
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIEBgcIAQP/xABDEAACAQIDAwgGBQoHAQAAAAAAAQIDBAURIQYSMQciQVFhcYGxEzKRocHRFBUjJCUzQmJyc4Ky4fDxJlJTY5Kiwgj/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3iAAAAAAAAeZo9zyNc8pm3ksEg8MwmcXf1Fzqmj9Cvnr4adYGT7R7X4Js6vxK9jGrlmqMFvVH1aL4mCXfLDUqtrC8BrNPhK6qKHtSz9zZrKG/cXEri5nKrXm25VJvNtkjRggMrXKrtLWjGpRw7DoQlHNKUptlUOVnaGjUjG4wmxqqWf5OpKL6OtMxTDoJ2Fs+ulHyPLiC+lW67J+SA2PhnLBh1SpCnjGHXVlvPL0scqkI9+WvsTNg4Xillilsriwuadek/zoSzyfU+p9jOcLimtdOPEowbGb/Zq/V5hdWVP/AD0lrGa6mvh5cQOnwQWyG0lrtLhcbu2ajNZRq0s9YS+XUToAAAAAAAAAAAAAAAPGBD7WYxHBMFubxtb8YNU0+Dk+Hh09yOZLq/q4jiNa5rTcpTk22+L1fH+uLZtTlyxZqFKwhLSEd5rrlLPL3KXtNOYfLOTAn7XozJKlwI614IkafB9wEI8Yu7anQoWtrCpGFCm5Sm3xa7C6w7EKl/UpyuKSpVKc5xai816qaPlhrpxblPJ71Gnp3RRXZZfWMpRaalUk8urmpfAC+rriRN2tGS9bpIm99VgTXJttLPAdoIb839Hq82ss9MnxeXZln4drOkKclOCknmms0zj2lWlRvoTg8nGSa7zp3k8xNYjszbty3p0c6cu5er7YtPxAycAAAAAAAAAAAAAPHoj0orPdpTfUmBzlyr3ju8dvJqWcY1HGPcko+cZe0wjDHqTu2Vf09a4q55uVWevfKUv/AEY/hj1AyW0eiJGD0fcRlq9ESEHzX3AY5VVzSlSnCjVnTqW9NxlCDl0LPgXmCRrRqKpXpzp+kqzcFNZNpRRK4a/w+1/Yw8kLh/e7b9/yAqrPiRN6+ayTqviRN6+awISUsrtd5vjkUvXK3urST9WMJrt1lHyjE0FN/e0+03JyPV3Sx6NLPSrby07nB/MDdgAAAAAAAAAAAAAW+IT3LOtLPLKDfuLgsMelu4PeS6qUn7gOVsbm54ZRqPjNJv8A4pEThr1JLHHlhNqux+ZE4e9UBk9rLREhCXNfcRVrLREjTlzfACrDn+H237KHkhcS+9W37/kfPDn9wtv2UPJC4f3q2/e8gK60tGRN9Lmska0uJE30uawISpL7yu82vyW1NzanDP0qU17f7GpKr+8LvNo8m9Td2pwTX1lJeyMgOhwFwAAAAAAAAAAAACN2keWA376qE/JkkRm0yzwC/X+xPyYHKeOv8NtV+t5siLJ5SRJ4687G3XVvfxMibV5MDI7SWiJGnLTIh7SeiJKnID74Zk7O3jKSj9ms2+jJFNeWd3brpW+/DL+ZRGEotuhOMU3m4yjms+nLVDd3ZOcpb02sm2stOpIBWl2kTey5rJCtLiRF7PRgRVR/brvNm8nMv8UYB+tNf9JGsJ61UbL5N3vbU4D2Sl/BMDpJALgAAAAAAAAAAAAEfj8d7BryPXRl5EgW2Ix37GtF8HBoDkLG5Z21FdX9yKoPUk8di4RpRlxWj71p8CKpPUCYtZZZEpRloQtvLgSVGYF/GWh5OR8oz0PJzA+NefEiruXEvq8iMuXxAsZflMzZ3JYt/arB/wBHe/hl8zWD9bxNq8jlN1dp7F5erTm/ckB0WuAPFwPQAAAAAAAAAAAHzuFvUZrsZ9DySzTQHIm2lD6PidzS/wBO5qR8N5v4mO03qZ1ysWjtdrsSpbuSqSVSHbnFPzTMDjxAkaEuBIUZEXQfAv6TAvYz0PKkz501KekIyb7EU1M08mmn1NZAfGtLiR1d8S8rS4lhWfEC26fE3NyF2+/jrnl+Stc/Fy/kacprOpFPhnn4G/OQGzzt8QvZL1nCmvDP5gbiAAAAAAAAAAAAAAABoT/6Dwx0MRssThHScfRyfatV8TTlRKNTmrmvVdx1Vyr4B9fbK3NKEc61KPpKeXWk/wCvE5YnBpypS0qU3wfvQH1ovgXtGRH0nwL2iwJulcRpQoeiXNhFN6cW+L9nmfHEKrr04zn66e7mllplr7y1jN7qTeaKKs5T1fgBbVpFjVeeZd1mWkouUko8QKaayWfXzV8f67TqXkgwt4bsZab8cqlf7WXi817sjnXZLBp47tFZ2FFNw3k5vqinqzrqwto2lnSoQWUYRUUkBcAAAAAAAAAAAAAAAApqQjUhKElmmsmc48ruwtfCMTqYrh9Ju2qyzmo58x9fcdIFpiNhb4hbToXNNThJZNNAca04bz6Iy6epl5SpyjxTNvbV8k8qVadxhC5jefozB7jZnELNuFW2rQT6UmBBRhoUzj7SV+qbrhvVNOuEfkewwe6lJZelk0+Cil5IDH6tKT+fQWvoqlSSo0Iuc5vLRavsM8sNicVxKolC2nFN+tKLNo7E8mVphE4Xd7FVbjtXq9wFvyObDvArP6wvoL6ZWXT+auo2iUwjGEVGKyS4IqAAAAAAAAAAAAAAAAAAADxnwrWVtWX2tGEu9AAWksDw2T1tKfsKqeDYdB820prwAAvKVClSWVOnGPcj6gAAAAAAAAAAAB//2Q=="
            />
            <Box p={"10px"}>
              <Text>Mouse</Text>
              <Text color={"white"} fontSize={"11px"}>
                Rp.100.000
              </Text>
              <Text color={"white"} fontSize={"11px"}>
                Stock : 100
              </Text>
            </Box>
          </Box>
        </GridItem>

        <GridItem w={"100%"}>
          <Box border={"1px solid #202021"} bg={"#202021"} borderRadius={"5px"}>
            <Image
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              src="data:image/jpeg;base64,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"
            />
            <Box p={"10px"}>
              <Text>Mouse</Text>
              <Text color={"white"} fontSize={"11px"}>
                Rp.100.000
              </Text>
              <Text color={"white"} fontSize={"11px"}>
                Stock : 100
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w={"100%"}>
          <Box border={"1px solid #202021"} bg={"#202021"} borderRadius={"5px"}>
            <Image
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              src="data:image/jpeg;base64,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"
            />
            <Box p={"10px"}>
              <Text>Mouse</Text>
              <Text color={"white"} fontSize={"11px"}>
                Rp.100.000
              </Text>
              <Text color={"white"} fontSize={"11px"}>
                Stock : 100
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w={"100%"}>
          <Box border={"1px solid #202021"} bg={"#202021"} borderRadius={"5px"}>
            <Image
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              src="data:image/jpeg;base64,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"
            />
            <Box p={"10px"}>
              <Text>Mouse</Text>
              <Text color={"white"} fontSize={"11px"}>
                Rp.100.000
              </Text>
              <Text color={"white"} fontSize={"11px"}>
                Stock : 100
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w={"100%"}>
          <Box border={"1px solid #202021"} bg={"#202021"} borderRadius={"5px"}>
            <Image
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              src="data:image/jpeg;base64,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"
            />
            <Box p={"10px"}>
              <Text>Mouse</Text>
              <Text color={"white"} fontSize={"11px"}>
                Rp.100.000
              </Text>
              <Text color={"white"} fontSize={"11px"}>
                Stock : 100
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w={"100%"}>
          <Box border={"1px solid #202021"} bg={"#202021"} borderRadius={"5px"}>
            <Image
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              src="data:image/jpeg;base64,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"
            />
            <Box p={"10px"}>
              <Text>Mouse</Text>
              <Text color={"white"} fontSize={"11px"}>
                Rp.100.000
              </Text>
              <Text color={"white"} fontSize={"11px"}>
                Stock : 100
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
