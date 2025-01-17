"use client";
import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteBank, getBankDetail, updateBank } from "@/api/Bank";
import { useForm } from "react-hook-form";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { CommonInput } from "@/components/input/inputText";
import { HiBanknotes } from "react-icons/hi2";
import Link from "next/link";

interface IProps {
  params: {
    bankId: string;
  };
}

interface UpdateBankForm {
  name: string;
  description: string;
  uri: string;
}

export default function BankDetail({ params: { bankId } }: IProps) {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["BankDetail", bankId],
    queryFn: async () => {
      const res = await getBankDetail(bankId);
      setValue("name", res.data.name);
      setValue("description", res.data.description);
      setValue("uri", res.data.uri);
      return res;
    },
  });
  const updateMutation = useMutation({
    mutationFn: (params: any[]) => updateBank(params[0], params[1]),
    onSuccess: (data) => {
      console.log(data);
      alert("은행이 수정되었습니다.");
      refetch();
    },
    onError: (err) => alert(err.message),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteBank,
    onSuccess: (data) => {
      console.log(data);
      alert("은행이 삭제되었습니다.");
      router.replace("/admin/bank");
    },
    onError: (err) => alert(err.message),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<UpdateBankForm>({
    defaultValues: {
      name: "",
      description: "",
      uri: "",
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const onSubmit = (formData: UpdateBankForm) => {
    let result = confirm("정말로 수정하시겠습니까?");
    if (result) {
      updateMutation.mutate([
        bankId,
        {
          name: formData.name,
          description: formData.description,
          uri: formData.uri,
        },
      ]);
    }
  };

  const deleteBankConfirm = () => {
    let result = confirm("정말로 삭제하시겠습니까?");
    if (result) {
      deleteMutation.mutate(bankId);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex flex-col py-4 h-28 justify-center">
            <div className="flex space-x-2">
              <Link
                href={"/admin/bank"}
                className="text-md font-medium text-gray-500 hover:text-pink-500"
              >
                은행
              </Link>
              <h1 className="text-md font-medium text-gray-500">/</h1>
              <Link
                href={`/admin/bank/${data.data.bankId}`}
                className="text-md font-medium text-gray-500 hover:text-pink-500"
              >
                {data.data.name}
              </Link>
            </div>
          </div>
          <CommonForm onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 pb-0 flex justify-between items-end">
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-4 items-center text-gray-600">
                  {data?.data?.uri ? (
                    <img
                      src={
                        data?.data?.uri ||
                        "https://lawstrust.com/sites/default/files/u1250/ico_otkrytie_schyota.png"
                      }
                      alt="bank_uri"
                      width={35}
                      height={35}
                    />
                  ) : (
                    <HiBanknotes className="w-10 h-10" />
                  )}

                  <h1 className="font-bold text-2xl">{watch("name")}</h1>
                </div>
                <h1 className="font-light text-xs text-gray-400">{data?.data?.bankId}</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-light">
                  생성: <span className="text-gray-500">{data?.data?.createdAt}</span>
                </h1>
                <h1 className="text-sm font-light">
                  수정: <span className="text-gray-500">{data?.data?.updatedAt}</span>
                </h1>
              </div>
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-8">
              <div>
                <Label htmlFor="name">은행명</Label>
                <InputContainer>
                  <CommonInput
                    className="w-80"
                    {...register("name", {
                      required: "은행명을 입력해주세요.",
                    })}
                  />
                  <ErrorMsg>{errors.name?.message}</ErrorMsg>
                </InputContainer>
              </div>
              <div>
                <Label htmlFor="description">은행 설명</Label>
                <InputContainer>
                  <CommonInput
                    className="w-full"
                    {...register("description", {
                      required: "은행 설명을 입력해주세요.",
                    })}
                  />
                </InputContainer>
              </div>
              <div>
                <Label htmlFor="uri">은행 로고 uri</Label>
                <InputContainer>
                  <CommonInput className="w-80" {...register("uri")} />
                </InputContainer>
              </div>
            </div>
            <Divider />
            <div className="flex gap-6 justify-end">
              <Button id={"edit"} name={"수정"} type="submit"></Button>
              <Button
                id={"delete"}
                name={"삭제"}
                onClick={deleteBankConfirm}
                type="button"
              ></Button>
            </div>
          </CommonForm>
        </>
      )}
    </>
  );
}

const Form = tw.form``;
const InputFormWrapper = tw.div`
`;

const InputContainer = tw.div`
mt-2
`;

const Label = tw.label`
block text-sm font-medium leading-6 text-gray-500
`;

const ErrorMsg = tw.span`
text-sm
text-red-400
`;

const Input = tw.input`
block 
w-full 
rounded-md 
border-0 
px-1.5
py-1.5
text-gray-700
ring-1
ring-inset 
ring-gray-300 
placeholder:text-gray-400 
focus:outline-none
focus:ring-2 
focus:ring-inset 
focus:ring-pink-500 
sm:text-sm 
sm:leading-6
`;
const CommonForm = tw.form`
p-14
pt-4
w-full
flex
flex-col
space-y-8
`;

const Divider = tw.div`
w-full
h-[1px]
bg-slate-300
my-4
`;
