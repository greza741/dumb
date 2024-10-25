import { useAppDispatch, useAppSelector } from "@/stores";
import { loginAsync } from "@/stores/auth/async";
import { loginSchema, LoginSchema } from "@/validations/login-shema";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);
  const { control, handleSubmit, reset } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    await dispatch(loginAsync(data));

    reset({
      email: "",
      password: "",
    });
    navigate("/");
  };

  const onError: SubmitErrorHandler<LoginSchema> = () => {
    toast.error("User Not Found");
  };
  return (
    <>
      <Box p={"125px 0px"}>
        <Box
          border={"1px solid grey"}
          bgColor={"#191918"}
          p={"40px"}
          h={"300px"}
          w={"400px"}
          borderRadius={"10px"}
        >
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Stack spacing={4}>
              <Text fontSize={"3xl"}>Login</Text>
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
                {loading ? "Loading..." : "Login"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}
