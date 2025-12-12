import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  }
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json(
        { error: "Invoice not Found!" },
        { status: 404 }
      );
    }

    const sender = {
      email: "hello@domaindemo.com",
      name: "Mailtrap Test",
    };

    const recipients = [
      {
        email: "emranhossain0335@gmail.com",
      },
    ];

    emailClient.send({
      from: sender,
      to: recipients,
      template_uuid: "8325d27c-adbb-4fac-9e22-5f0268bef99e",
      template_variables: {
        company_info_name: "Test_Company_info_name",
        first_name: invoiceData.clientName,
        company_info_address: "Test_Company_info_address",
        company_info_city: "Test_Company_info_city",
        company_info_zip_code: "Test_Company_info_zip_code",
        company_info_country: "Test_Company_info_country",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email remainder" },
      { status: 500 }
    );
    console.log(error);
  }
}
