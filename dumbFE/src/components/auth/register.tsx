import { useAppDispatch, useAppSelector } from "@/stores";
import { registerSchema, RegisterSchema } from "@/validations/register-schema";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  Controller,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAsync } from "@/stores/auth/async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function RegisterForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);
  const { control, handleSubmit, reset } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    const res = await dispatch(registerAsync(data));

    if (registerAsync.fulfilled.match(res)) {
      reset({
        name: "",
        email: "",
        password: "",
      });
      navigate("/login");
    }
  };

  const onError: SubmitErrorHandler<RegisterSchema> = () => {
    toast.error("Register failed");
  };

  return (
    <>
      <Box p={"125px 0px"}>
        <Box
          border={"1px solid grey"}
          bgColor={"#191918"}
          p={"40px"}
          h={"350px"}
          w={"400px"}
          borderRadius={"10px"}
        >
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Stack spacing={4}>
              <Text fontSize={"3xl"}>Register</Text>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    {...fieldState}
                    bgColor={"#474647"}
                    placeholder="Name"
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    {...fieldState}
                    bgColor={"#474647"}
                    placeholder="Email"
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    {...fieldState}
                    bgColor={"#474647"}
                    placeholder="Password"
                    type="password"
                  />
                )}
              />
              <Button
                type="submit"
                bgColor={"brand.orange"}
                color={"white"}
                borderRadius={"10px"}
              >
                {loading ? "Loading..." : "Register"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}
