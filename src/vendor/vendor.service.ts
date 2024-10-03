import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor, VendorDocument } from './vendor.schema';

@Injectable()
export class VendorService {
  constructor(@InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>) {}

  async create(createVendorDto: any): Promise<Vendor> {
    const createdVendor = new this.vendorModel(createVendorDto);
    return createdVendor.save();
  }

  async findAll(): Promise<Vendor[]> {
    return this.vendorModel.find().exec();
  }

  async findById(id: string): Promise<Vendor> {
    return this.vendorModel.findById(id).exec();
  }

  async update(id: string, updateVendorDto: any): Promise<Vendor> {
    return this.vendorModel.findByIdAndUpdate(id, updateVendorDto, { new: true }).exec();
  }

}
