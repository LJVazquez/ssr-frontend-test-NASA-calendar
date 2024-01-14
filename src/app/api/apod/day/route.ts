import { ApodApiData } from '@/app/shared/models/pictureModels';
import { NextRequest, NextResponse } from 'next/server';
import { getPictureOfTheDay } from '../controller';

export async function GET(req: NextRequest) {
	const date = req.nextUrl.searchParams.get('date');

	try {
		const picture: ApodApiData = await getPictureOfTheDay(date);
		return NextResponse.json(picture);
	} catch (e: any) {
		const error = JSON.parse(e.message);
		return NextResponse.json({ error }, { status: error.status });
	}
}
