/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createSpecialityZodSchema } from "@/zod/specialities.validation";
import { revalidateTag } from "next/cache";


export async function createSpeciality(_prevState: any, formData: FormData) {

     try {

          const payload = {
               title: formData.get("title") as string,
          }

          if (zodValidator(payload, createSpecialityZodSchema).success === false) {
               return zodValidator(payload, createSpecialityZodSchema);
          }

          const validatedPayload = zodValidator(payload, createSpecialityZodSchema).data;

          const newFormData = new FormData();
          newFormData.append("data", JSON.stringify(validatedPayload));

          if (formData.get("file")) {
               newFormData.append("file", formData.get("file") as Blob);
          }

          const response = await serverFetch.post("/specialties", {
               body: newFormData,
          });

          const result = await response.json();

          if (result.success) {
          revalidateTag("specialities-list", { expire: 0 });
          }

          return result;
          
     } catch (error: any) {
          console.log("Error creating speciality:", error);
          return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}` }
     }
}




export async function getSpecialities() {

     try {

          const response = await serverFetch.get("/specialties", {
          next: {
               tags: ["specialities-list"],
                revalidate: 600 // 10 minutes - specialties rarely change
          }
          });

          const result = await response.json();
          return result;
     } catch (error: any) {
          console.log("Error fetching specialities:", error);
          return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}` }
     }
}



export async function deleteSpeciality(specialityId: string) {

     try {

          const response = await serverFetch.delete(`/specialties/${specialityId}`);
          const result = await response.json();

          if (result.success) {
          revalidateTag('specialities-list', { expire: 0 });
          revalidateTag(`specialty-${specialityId}`, { expire: 0 });
            revalidateTag('doctors-list', { expire: 0 }); // Doctors have 
     }
     return result;
     } catch (error: any) {
          console.log("Error deleting speciality:", error);
          return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}` }
     }
}