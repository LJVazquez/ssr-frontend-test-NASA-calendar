import { NextRequest, NextResponse } from 'next/server';
import { getMultiplePicturesOfTheDay } from '../controller';
import { ApodApiData } from '@/app/shared/models/pictureModels';

export async function GET(req: NextRequest) {
	const startDate = req.nextUrl.searchParams.get('start_date');
	const endDate = req.nextUrl.searchParams.get('end_date');

	try {
		const pictures: ApodApiData[] = await getMultiplePicturesOfTheDay(
			startDate!,
			endDate!
		);
		return NextResponse.json(pictures);
	} catch (e: any) {
		const error = JSON.parse(e.message);
		return NextResponse.json({ error }, { status: error.status });
	}
}
