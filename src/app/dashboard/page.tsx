// 'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { db } from '@/db';
import { formatePrice } from '@/lib/utils';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { notFound } from 'next/navigation';

const Page = async () => {


    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    if (!user || user.email !== ADMIN_EMAIL) {
        return notFound();
    }

    const orders = await db.order.findMany({
        where: {
            isPaid: true,
            createdAt: {
                // it will show the last 7 days data;
                gte: new Date(new Date().setDate(new Date().getDate() - 7))
            }
        },
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            user: true,
            shippingAddress: true,
        }
    })

    const WEEKLY_GOAL = 500;
    const MONTHLY_GOAL = 2500;

    const lastWeekSum = await db.order.aggregate({
        where: {
            isPaid: true,
            createdAt: {
                gte: new Date(new Date().setDate(new Date().getDate() - 7))
            }
        },
        _sum: {
            amount: true,
        }
    })
    const lastMonthSum = await db.order.aggregate({
        where: {
            isPaid: true,
            createdAt: {
                gte: new Date(new Date().setDate(new Date().getDate() - 30))
            }
        },
        _sum: {
            amount: true,
        }
    })

    // console.log(lastWeekSum);


    return (
        <div className='flex min-h-screen w-full bg-muted/40'>
            <div className='max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4'>
                <div className='flex flex-col gap-16'>
                    <div className='grid gap-4 sm:grid-cols-2'>
                        <Card>
                            <CardHeader className='pb-2'>
                                <CardDescription>Last Week</CardDescription>
                                <CardTitle className='text-4xl'>
                                    {formatePrice(lastWeekSum._sum.amount ?? 0)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='text-sm text-muted-foreground'>
                                    of {formatePrice(WEEKLY_GOAL)} goal
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Progress value={(lastWeekSum._sum.amount ?? 0) * 100 / WEEKLY_GOAL} />
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader className='pb-2'>
                                <CardDescription>Last Month</CardDescription>
                                <CardTitle className='text-4xl'>
                                    {formatePrice(lastWeekSum._sum.amount ?? 0)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='text-sm text-muted-foreground'>
                                    of {formatePrice(MONTHLY_GOAL)} goal
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Progress value={(lastMonthSum._sum.amount ?? 0) * 100 / MONTHLY_GOAL} />
                            </CardFooter>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;